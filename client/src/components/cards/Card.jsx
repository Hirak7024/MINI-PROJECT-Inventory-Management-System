import "./card.css"
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export default function Cards({ backgroundColor, quantity, heading }) {
    return (
        <>
            <div className="cardContainer" style={{ backgroundColor }}>
                <div className="cardCon"><ViewInArIcon className="icon"/></div>
                <div className="nameAndQuantity">
                    <div className="cardQuantity">{quantity}</div>
                    <div className="cardTitle">{heading}</div>
                </div>
            </div>
        </>
    )
}
