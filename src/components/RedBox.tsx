interface IRedBox {
  text: string;
  className?: string;
}

export const RedBox = ({ text, className }: IRedBox) => {
  return (
    <article className={className}>
          <p>{text}</p>
    </article>
  )
};