import { useRouter } from 'next/router';

const regex = RegExp(/^\/merch/, 'i');

const isMerchRoute = (): boolean => {
  const router = useRouter();
  return regex.test(router.pathname);
};

export default isMerchRoute;
