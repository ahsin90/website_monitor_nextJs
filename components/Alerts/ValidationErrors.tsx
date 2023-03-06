export const ValidationErrors = (props: { errors?: any }) => {
  const errors: any = props.errors;
  let res = [];
  if (typeof errors === "object" && errors !== null) {
    for (const field in errors) {
      const f = errors[field];
      for (const index in f) {
        res.push(
          <div
            key={Math.random()}
            className="p-2 mb-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {f[index]}
          </div>
        );
      }
    }
  }

  return <>{res}</>;
};
