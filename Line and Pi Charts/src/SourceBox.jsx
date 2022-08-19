import { useState,useMemo, memo, } from 'react';
import { useDrag } from 'react-dnd';
import { Colors } from './Colors';
const style = {
    border: '1px solid gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
export const SourceBox = memo(function SourceBox({ color, children, }) {
    const [forbidDrag, setForbidDrag] = useState(false);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: color,
        canDrag: !forbidDrag,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [forbidDrag, color]);

    const backgroundColor = useMemo(() => {
        switch (color) {
            case Colors.BLUE:
                return 'lightblue';
            case Colors.SPEED:
                return 'lightblue';
            case Colors.DISTANCE:
                return 'lightblue';
            default:
                return 'lightgoldenrodyellow';
        }
    }, [color]);
    const containerStyle = useMemo(() => ({
        ...style,
        backgroundColor,
        opacity: isDragging ? 0.8 : 1,
        cursor: forbidDrag ? 'default' : 'move',
    }), [isDragging, forbidDrag, backgroundColor]);
    return (<div ref={drag} style={containerStyle} data-color={color}>
			<small>{color}</small>
			{children}
		</div>);
});
