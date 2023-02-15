import {useSelector} from "react-redux";

export const useGetFriends = () => {
  return useSelector((state) => state.mainReducer.friends);
}