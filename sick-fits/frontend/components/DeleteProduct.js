const DeleteProduct = ({ id, children }) => (
  <button
    type="button"
    onClick={() => {
      if (confirm('Are you sure you want to delete this item?')) {
        // go ahead and delete it
        console.log('DELETE');
      }
    }}
  >
    {children}
  </button>
);

export default DeleteProduct;
