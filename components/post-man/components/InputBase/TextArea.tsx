interface Props {
  cols?: number;
  rows?: number;
  name?: string;
  id?: string;
}
export default function TextArea({ name, id, cols = 30, rows = 10 }: Props) {
  return (
    <>
      <textarea name={name} id={id} cols={cols} rows={rows} />
    </>
  );
}
