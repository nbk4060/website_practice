
export default function Main(props) {
  return (
    <>
      <div>
          <h6 className="font-font_family font-medium not-italic text-xl leading-5 text-white">{props.title}</h6>
          <p className="font-sans font-medium not-italic text-base leading-5 text-gray-400 mt-4">{props.detail}</p>
      </div>
    </>
  )
}