import { useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const TOOLBAR_OPTIONS = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['blockquote', 'code-block'],
  [{ header: [1, 2, 3, 4, 5, 6] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  ['link', 'image'],
  ['clean'],
];

const TextEditor = () => {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;

    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
};

export default TextEditor;
