import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Form/input";
import { Modal } from "../Modal";
import { FieldValues } from "react-hook-form/dist/types/fields";

// Component

export function ScheduleModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const schema = yup
    .object({
      name: yup.string().min(3).required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <Modal title="Agendar Consulta">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="flex gap-2 mb-4">
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

        <footer>
          <Button type="submit">Agendar</Button>
        </footer>
      </form>
    </Modal>
  );
}
