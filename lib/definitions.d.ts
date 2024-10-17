type TabIconProps = {
  icon: any;
  focused: boolean;
  color: string;
  name: string;
};

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  isLoading?: boolean;
  textStyles: stirng;
};

type FormFieldProps = {
  title: string;
  control: any;
  name: string;
  inputStyles?: string;
  containerStyles?: string;
  secureTextEntry: boolean;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
};

type ChildrenProps = {
  children: ReactNode;
};

type TSubtask = {
  id: string;
  title: string;
  progress: number;
  status: "In Progress" | "Completed";
};

type TTask = {
  id: string;
  title: string;
  progress: number;
  status: "In Progress" | "Completed";
  iconColor: string;
  userCount: number;
  subtasks: TSubtask[];
};

type TAttachment = {
  id: string;
  name: string;
};

type TProject = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  userCount: number;
  commentCount: number;
  description: string;
  leader: string;
  dueDate: string;
  tasks: TTask[];
  attachments: TAttachment[];
};
