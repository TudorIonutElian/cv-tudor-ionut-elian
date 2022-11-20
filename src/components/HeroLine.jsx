

function HeroLine(props) {
    return (
        <div className="flex flex-row items-center">
            <div className="mx-3 w-48">{props.left}</div>
            <div className="mx-3">{props.right}</div>
        </div>
    );
  }
  
  export default HeroLine;