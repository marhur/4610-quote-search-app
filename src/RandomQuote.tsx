interface RandomQuoteProps {
  quote: string;
  author: string;
}


// export const RandomQuote = () => {
//     console.log("RandomQuote")
//     return <div>I am a RandomQuote !</div>;
// }

export const RandomQuote = ({ quote, author }: RandomQuoteProps) => {
  return (
    <div>
      <div>
        {/* Note that now I am just using label like a variable rather than props.label */}
        {quote}
      </div>
      <div>
        - {author}
      </div>
    </div>
  );
}