interface RandomQuoteProps {
  quote: string;
  author: string;
}

export const RandomQuote = ({ quote, author }: RandomQuoteProps) => {
  return (
    <div className="randomQuote">
      <div>
        {quote}
      </div>
      <div>
        - {author}
      </div>
    </div>
  );
}