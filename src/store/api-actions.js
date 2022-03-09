import {setQuest, setQuestRequestStatus, setQuests, setQuestsRequestStatus, setReviewRequestStatus} from './actions';
import {APIRoute, ErrorMessage, HttpCode, RequestStatus, SuccessMessage} from '../const';
import {toast} from 'react-toastify';

const getQuestAction = (id) => (
  async (dispatch)  => {
    dispatch(setQuestRequestStatus(RequestStatus.Loading));
    await fetch(APIRoute.GetQuest(id))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status.toString());
      })
      .then((data) => {
        dispatch(setQuest(data));
        dispatch(setQuestRequestStatus(RequestStatus.Success));
      })
      .catch(({error}) => {
        dispatch(setQuestRequestStatus(
          error && error.message === HttpCode.NotFound
            ? RequestStatus.NotFound
            : RequestStatus.Fail
        ));
        !error && toast.error(ErrorMessage.FailToLoadQuest);
      });
  }
);

const getQuestsAction = () => (
  async (dispatch)  => {
    dispatch(setQuestsRequestStatus(RequestStatus.Loading));
    await fetch(APIRoute.GetQuests())
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status.toString());
      })
      .then((data) => {
        dispatch(setQuests(data));
        dispatch(setQuestsRequestStatus(RequestStatus.Success));
      })
      .catch(() => {
        dispatch(setQuestsRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToLoadQuests);
      });
  }
);

const postOrderAction = (order) => (
  async (dispatch)  => {
    dispatch(setReviewRequestStatus(RequestStatus.Loading));
    await fetch(APIRoute.PostOrders(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(setReviewRequestStatus(RequestStatus.Success));
          toast.success(SuccessMessage.SuccessToSendOrder);
        } else {
          throw new Error(response.status.toString());
        }
      })
      .catch(() => {
        dispatch(setReviewRequestStatus(RequestStatus.Fail));
        toast.error(ErrorMessage.FailToSendOrder);
      });
  }
);

export {
  getQuestAction,
  getQuestsAction,
  postOrderAction,
};
