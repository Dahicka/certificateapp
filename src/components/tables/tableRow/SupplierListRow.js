const SupplierListRow = (props) => {
    return (
        <tr>
            <td><input type="radio" name="testing"
                value={props.supplier.supplierName + "," + props.supplier.supplierIndex + "," + props.supplier.supplierCity}
                onChange={props.handleRadio} /></td>
            <td>{props.supplier.supplierName}</td>
            <td>{props.supplier.supplierIndex}</td>
            <td>{props.supplier.supplierCity}</td>
        </tr>
    );
};

export default SupplierListRow;