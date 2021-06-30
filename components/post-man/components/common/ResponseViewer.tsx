import { useEffect, useRef, useState, useMemo, useReducer } from 'react';
import { withPreferTheme, ThemeSchema } from '../../../../context/prefer-theme/withPreferTheme';
import JSONFormatter from 'json-formatter-js';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import ListPopUpButton, { ShapeButton } from '../ButtonBase/ListPopUpButton';
import { formatJSON } from '../../../../utils/formatJSON';

type Props = {
  themeModeState: ThemeSchema;
};

type View = 'Object' | 'Preview' | 'Raw';
type Action = { type: 'Object' | 'Preview' | 'Raw' };
interface State {
  view: View;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'Object':
      return { view: action.type };
    case 'Preview':
      return { view: action.type };
    case 'Raw':
      return { view: action.type };
    default:
      return state;
  }
};
class ButtonBase implements ShapeButton {
  constructor(public title: View, public key: string, public onClick: (title: View) => any) {}
}

function ResponseViewer({ themeModeState }: Props) {
  const [theme, setTheme] = useState(themeModeState.theme);
  const [state, dispatch] = useReducer(reducer, { view: 'Object' });
  const DATA = useSelector((state: any) => state.response.result);
  const objectViewerRef = useRef(null);
  const previewViewerRef = useRef(null);
  const { view } = state;

  const memoData = useMemo(() => JSON.stringify(DATA, null, 0).trim(), [DATA]);
  const listButton: ShapeButton[] = useMemo(
    () => [
      new ButtonBase('Object', v4(), (title) => {
        dispatch({ type: title });
      }),
      new ButtonBase('Preview', v4(), (title) => {
        dispatch({ type: title });
      }),
      new ButtonBase('Raw', v4(), (title) => {
        dispatch({ type: title });
      }),
    ],
    []
  );

  useEffect(() => {
    const unSub = themeModeState.subscribe((theme) => {
      setTheme(() => theme);
    });
    return unSub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const objViewerNode = objectViewerRef.current;
    if (objViewerNode && typeof window !== 'undefined' && view === 'Object') {
      const formatter = new JSONFormatter(DATA, 1, { theme });
      (objViewerNode as HTMLDivElement).innerHTML = '';
      (objViewerNode as HTMLDivElement).appendChild(formatter.render());
    }
  }, [theme, DATA, view]);
  useEffect(() => {
    const previewNode = previewViewerRef.current;
    if (view === 'Preview' && previewNode) {
      formatJSON(DATA, previewNode);
    }
  }, [view, DATA]);

  return (
    <div className='p-3 overflow-auto bg-gray-100 dark:bg-gray-800' style={{ height: 450 }}>
      <div className='w-full h-9'>
        <div className='float-right mb-2'>
          <ListPopUpButton title={'Change View'} listButton={listButton} />
        </div>
      </div>
      {view === 'Object' ? <div className={` w-full`} ref={objectViewerRef} /> : null}
      {view === 'Preview' ? (
        <div>
          <pre ref={previewViewerRef} className='overflow-x-auto w-full' />
        </div>
      ) : null}
      {view === 'Raw' ? <div>{memoData}</div> : null}
    </div>
  );
}
export default withPreferTheme(ResponseViewer);
