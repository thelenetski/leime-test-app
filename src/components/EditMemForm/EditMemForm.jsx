import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectContentModal } from "../../redux/modal/selectors";
import { Input, Button } from "@heroui/react";
import { editMeme } from "../../redux/memes/operation";
import { closeModal } from "../../redux/modal/slice";

// Yup схема валидации
const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(3).max(100),
  likes: yup
    .number()
    .typeError("Likes must be a number")
    .required("Likes is required")
    .min(0, "Likes must be at least 0")
    .max(99, "Likes must be less then 100"),
  img: yup.string().url("Invalid URL format").required("Image URL is required"),
});

const EditMemForm = () => {
  const data = useSelector(selectContentModal);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: data.title,
      likes: data.likes,
      img: data.img,
    },
  });

  const onSubmit = (formData) => {
    dispatch(editMeme(formData));
    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h4 className="font-bold text-lg mb-4 uppercase">Edit mem</h4>
      <div className="flex flex-col gap-4">
        <Input
          isReadOnly
          defaultValue={data._id}
          label="ID"
          type="text"
          variant="underlined"
          {...register("_id")}
        />

        <div>
          <Input
            label="Name"
            variant="underlined"
            isInvalid={!!errors.title}
            errorMessage={errors.title?.message}
            {...register("title")}
          />
        </div>

        <div>
          <Input
            label="Likes"
            type="number"
            variant="underlined"
            isInvalid={!!errors.likes}
            errorMessage={errors.likes?.message}
            {...register("likes")}
          />
        </div>

        <div>
          <Input
            label="Image URL"
            type="url"
            variant="underlined"
            isInvalid={!!errors.img}
            errorMessage={errors.img?.message}
            {...register("img")}
          />
        </div>

        <Button color="primary" type="submit" className="mt-4 max-w-xs">
          Save changes
        </Button>
      </div>
    </form>
  );
};

export default EditMemForm;
