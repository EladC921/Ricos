import EditableList from "./EditableList";
import EditableTable from "./EditableTable";
const RecipeForm = () => {
  return (
    <div className="recipe-form">
      <h1>Name of the recipe</h1>
      <h2>Name of the auther</h2>
      <h3>ingredients list</h3>
      <EditableTable />
      <h3>Step by step</h3>
      <EditableList />
    </div>
  );
};
export default RecipeForm;
