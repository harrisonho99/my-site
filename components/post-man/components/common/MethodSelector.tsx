import { useSelector, RootStateOrAny } from 'react-redux';

export default function MethodSelector() {
  const options = useSelector((state: RootStateOrAny) => state.methodsOptions);
  console.log({ options });
  return <></>;
}
