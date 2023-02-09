import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";

// Component
import { Button } from "../Button";
import { Input } from "../Form/input";
import { Modal } from "../Modal";
import { Radio } from "../Form/radio";
import { useState } from "react";

type Props = {
  onSubmit: (data: FieldValues) => void;
};

const days = [
  {
    title: "d",
    value: "0",
  },
  {
    title: "s",
    value: "1",
  },
  {
    title: "t",
    value: "2",
  },
  {
    title: "q",
    value: "3",
  },
  {
    title: "q",
    value: "4",
  },
  {
    title: "s",
    value: "5",
  },
  {
    title: "s",
    value: "6",
  },
];

export function ScheduleModal({ onSubmit }: Props) {
  const schema = yup
    .object({
      name: yup.string().min(3).required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      hour: yup.string().required(),
    })
    .required();

  const [day, setDay] = useState("0");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Modal title="Agendar Consulta">
      <form onSubmit={handleSubmit((data) => onSubmit({ ...data, day }))}>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="font-bold mb-2 select-none">
              Nome Completo
            </label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Seu Nome"
            />
            <span>{errors.root?.message}</span>
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="phone" className="font-bold mb-2 select-none">
              Telefone
            </label>
            <Input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="(99) 99999-9999"
              mask="(99) 99999-9999"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-bold mb-2 select-none">
            Email
          </label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Radio
            items={days}
            {...register("day")}
            title="Dia"
            value={day}
            onChange={setDay}
          />

          <label className="flex flex-col font-bold mb-2 select-none">
            Horário
            <Input type="time" {...register("hour")} />
          </label>
        </div>

        <footer className="mt-8">
          <Button type="submit">Agendar</Button>
        </footer>
      </form>
    </Modal>
  );
}
