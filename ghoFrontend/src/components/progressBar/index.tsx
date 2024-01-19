type ProgressBar = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBar> = (props) => {
  return (
    <div className="w-full bg-grayHigh rounded overflow-hidden">
      <div
        className="h-2 bg-purple"
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
}
export default ProgressBar;