import './victory.scss'

export default function TryAgain ({onClickFunc}) {
    return (
        <button
            className="tryAgain"
            onClick={onClickFunc}
        >
            Try again.
        </button>
    )
}