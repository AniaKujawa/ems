import { Button, Input } from "@ems/common-ui";
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateOfferDto, createOfferSchema } from "./types";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";

type Props = {
  createOffer: (data: CreateOfferDto) => Promise<void>;
}
export const CreateOffer = ({ createOffer }: Props) => {
  const { handleSubmit, register, formState: { errors, isValid, isSubmitting } } = useForm<CreateOfferDto>({
    resolver: zodResolver(createOfferSchema)
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateOfferDto> = async (data) => {
    await createOffer(data);
    navigate(ROUTE.OFFERS);
  };

  return (
    <div>
      <div>Create offer</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('role')} label="Role" error={errors.role} />
        <Input {...register('description')} label="Description" error={errors.description} />
        <Input {...register('salary', { valueAsNumber: true })} type="number" label="Salary" error={errors.salary} />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  )
}