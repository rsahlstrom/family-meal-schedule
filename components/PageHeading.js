import 'twin.macro';

const PageHeading = ({ children, ...rest }) => {
  return (
    <h1 tw="text-6xl text-center leading-none mb-4" {...rest}>
      {children}
    </h1>
  );
};

export default PageHeading;
