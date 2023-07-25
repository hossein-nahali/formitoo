export const HandleDrag = (e, setDrag, setError) => {
    e.preventDefault();
    e.stopPropagation();
    setError({err: false, message: ''})
    if (e.type === "dragenter" || e.type === "dragover") {
        setDrag(true);
    } else if (e.type === "dragleave") {
        setDrag(false);
    }
}