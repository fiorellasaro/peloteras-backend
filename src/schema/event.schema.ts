import * as yup from 'yup';

export interface IEvent {
  location: string;
  date: string;
  hour: string;
  cost: string;
  quota: string;
  email: string;
}

export const CreateEventSchema = yup.object().shape({
  location: yup.string().required(),
  date: yup.string().required(),
  hour: yup.string().required(),
  cost: yup.string().required(),
  quota: yup.string().required(),
  email: yup.string().required(),
}) as yup.SchemaOf<IEvent>;