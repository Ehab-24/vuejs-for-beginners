import { ref } from "vue";

const getCurrentKitchenItems = () => {
  const currentItems = ref([]);
  const addToCurrentItems = (food) => {
    currentItems.value.push(food);
  };
  const removeFromCurrentItems = (food) => {
    currentItems.value = currentItems.value.filter((f) => f !== food);
  };

  return { currentItems, addToCurrentItems, removeFromCurrentItems };
};

export default getCurrentKitchenItems;