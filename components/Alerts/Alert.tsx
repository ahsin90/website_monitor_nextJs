export const Alert = (props: { error?: string; type?: string }) => {
  const error: any = props.error;
  const type = props.type;

  const res = [];

  if (error && type === "danger") {
    res.push(
      <div
        key={Math.random()}
        className="p-2 mb-1 text-sm text-red-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        {error}
      </div>
    );
  } else if (error && type === "warning") {
    res.push(
      <div
        key={Math.random()}
        className="p-2 mb-1 text-sm text-orange-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-orange-300"
        role="alert"
      >
        {error}
      </div>
    );
  } else if (error && type === "success") {
    res.push(
      <div
        key={Math.random()}
        className="p-2 mb-1 text-sm text-green-500 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        {error}
      </div>
    );
  }

  return <>{res}</>;
};
