import React, {forwardRef} from "react";

export const Quote = forwardRef(({content, author}, ref) => {
  return (
    <article className="quote" ref={ref}>
      <div>
        <p className="content">{content}</p>
        <p><span className="author">&mdash; {author}</span></p>
      </div>
    </article>
  )
})