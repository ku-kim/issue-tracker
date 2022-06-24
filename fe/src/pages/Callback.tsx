import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Callback() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const code = searchParams.get('code');
    console.error(code);
  }, []);
  return <div>나는 콜백 페이지야.</div>;
}

export default Callback;
