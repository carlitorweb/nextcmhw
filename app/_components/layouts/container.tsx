type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-2'>{children}</div>;
};

export default Container;
