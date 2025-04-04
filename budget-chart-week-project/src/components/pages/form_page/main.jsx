import React from "react";
import { useForm } from "react-hook-form";

export default function BudgetForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let total = 0;
    Object.values(data).forEach(value => {
      total += Number(value) || 0;
    });

    console.log("My Balance:", total);
  };

  return (
    <form id="budgetForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register("weekday1")} placeholder="Monday" />
      <input type="number" {...register("weekday2")} placeholder="Tuesday" />
      <input type="number" {...register("weekday3")} placeholder="Wednesday" />
      <input type="number" {...register("weekday4")} placeholder="Thursday" />
      <input type="number" {...register("weekday5")} placeholder="Friday" />
      <input type="number" {...register("weekday6")} placeholder="Saturday" />
      <input type="number" {...register("weekday7")} placeholder="Sunday" />

      <button type="submit">Calculate Budget</button>
    </form>
  );
}

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Form() {
    
//     const { register, handleSubmit } = useForm();
//     const onSubmit = (data) =>
//         forEach((value) => {
//             let total = 0;
//             const budgetInputs = document.getElementsByClassName("weekday");
//             for (i = 0; i < budgetInputs.length; i++) {
//                 total += Number(budgetInputs[i].value) || 0;
//             }
//             console.log("Your budget is: ", total);
//             console.log("Current balance", budgetValue);
//     });
//   console.log(error);

//   return (
//     <form id="budgetForm" onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Monday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Tusday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Wednesday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Thursday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Friday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Saturday"
//         {...register}
//       />
//       <input
//         type="number"
//         className="weekday"
//         placeholder="Sunday"
//         {...register}
//       />

//       <input type="submit" />
//     </form>
//   );
// }
