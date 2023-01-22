import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
class Event {
  @prop({ type: String, required: true, trim: true })
  location!: string;
  @prop({ type: String, required: true, trim: true })
  date!: string;
  @prop({ type: String, required: true, trim: true })
  hour!: string;
  @prop({ type: String, required: true, trim: true })
  cost!: string;
  @prop({ type: String, required: true, trim: true })
  quota!: string;
  @prop({ type: String, required: true, trim: true })
  email!: string;
}

const EventModel = getModelForClass(Event);
export default EventModel;
