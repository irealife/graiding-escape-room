import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postOrderAction} from '../../../../store/api-actions';
import {setReviewRequestStatus} from '../../../../store/actions';
import {getReviewRequestStatus} from '../../../../utils';
import {isValidPhoneNumber} from 'react-phone-number-input';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import * as S from './booking-modal.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';
import {RequestStatus} from '../../../../const';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Введите имя'),
  phone: yup
    .string()
    .test(
      'test-phone',
      'Введите номер телефона',
      (value) => isValidPhoneNumber(value, 'RU'),
    )
    .required(),
  peopleCount: yup
    .number()
    .positive('Количество участников должно быть больше 0')
    .typeError('Введите количество участников')
    .required(),
  isLegal: yup
    .bool()
    .oneOf([true], 'Подтвердите согласие на обработку персональных данных'),
}).required();

function BookingModal({onCloseBtnClick}) {
  const reviewRequestStatus = useSelector(getReviewRequestStatus);
  const [, setPhoneNumber] = useState('');
  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleDataFetch = (data) => {
    dispatch(postOrderAction({ ...data}));
  };
  const handlePhoneNumberClick = (evt) => {
    if (!/[0-9]/.test(evt.key)) {
      evt.preventDefault();
    }
  };
  const handleCloseBtnClick = () => onCloseBtnClick && onCloseBtnClick(false);
  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onCloseBtnClick && onCloseBtnClick(false);
    }
  }, [onCloseBtnClick]);
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [handleEscKeyDown]);
  useEffect(() => {
    if (reviewRequestStatus === RequestStatus.Success) {
      dispatch(setReviewRequestStatus(RequestStatus.Unknown));
      document.removeEventListener('keydown', handleEscKeyDown);
      onCloseBtnClick(false);
    }
  }, [dispatch, handleEscKeyDown, onCloseBtnClick, reviewRequestStatus]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={handleCloseBtnClick}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          noValidate
          onSubmit={handleSubmit(handleDataFetch)}
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              {...register('name')}
              type="text"
              id="booking-name"
              name="name"
              placeholder="Имя"
              required
            />
            {errors.name && (
              <S.BookingErrorText>{errors.name?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              {...register('phone')}
              type="tel"
              id="booking-phone"
              name="phone"
              placeholder="Телефон"
              onChange={setPhoneNumber}
              required
            />
            {errors.phone && (
              <S.BookingErrorText>{errors.phone?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              {...register('peopleCount')}
              onKeyPress={handlePhoneNumberClick}
              type="number"
              id="booking-people"
              name="peopleCount"
              placeholder="Количество участников"
              required
            />
            {errors.peopleCount && (
              <S.BookingErrorText>{errors.peopleCount?.message}</S.BookingErrorText>
            )}
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              {...register('isLegal')}
              type="checkbox"
              id="booking-legal"
              name="isLegal"
              required
            />
            {errors.isLegal && (
              <S.BookingErrorText>{errors.isLegal?.message}</S.BookingErrorText>
            )}
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

BookingModal.propTypes = {
  onCloseBtnClick: PropTypes.func,
};

export default BookingModal;
