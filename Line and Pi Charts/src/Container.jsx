import { memo, useContext } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { StatefulTargetBox as TargetBox2 } from './TargetBox2';
import { Colors } from './Colors';
import ChartContext from './Context/chartContext';

export const Container = memo(function Container() {
	const ctx = useContext(ChartContext)
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
			<div style={{ float: 'left', marginTop: '70px'}}>
				<SourceBox color={Colors.BLUE}/>
                <SourceBox color={Colors.SPEED}/>
                <SourceBox color={Colors.DISTANCE}/>
			</div>

			<div style={{  marginLeft: '5rem', marginTop: '.5rem',display:'inline-block' }}>
                <TargetBox />
			</div>

			{ctx.line &&
            <div style={{  marginLeft: '10.3rem', marginTop: '.5rem',display:'inline-block' }}>
                <TargetBox2 />
			</div>
			}
            
		</div>);
});