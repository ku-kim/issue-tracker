import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

function usePostMilestoneCreation({
  title,
  desc,
  dueDate,
}: {
  title: string;
  desc: string;
  dueDate: string;
}) {
  const [getAccessTokenFromLocalStorage] = useLocalStorage({ key: 'ACCESS_TOKEN' });
  const accessToken = getAccessTokenFromLocalStorage();
  const userBody = {
    title,
    description: desc,
    dueDate,
  };
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userBody),
  };

  useFetch({ url: `${process.env.REACT_APP_API_END_POINT}api/milestones`, options });
}

export default usePostMilestoneCreation;
