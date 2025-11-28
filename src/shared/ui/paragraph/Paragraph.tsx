import type { FC }  from 'react'
import './Paragraph.scss'

type ParagraphProps = {
  paragraphText: string
}

const Paragraph: FC<ParagraphProps> = ({ paragraphText }) => {
  return (
    <div className="paragraph_area">
      <h2>{paragraphText}</h2>
    </div>
  )
}

export default Paragraph
