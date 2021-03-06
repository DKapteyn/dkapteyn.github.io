export type buttonT = {
  text: string;
  link?: string;
  a?: string;
};

export type projectT = {
  title: string;
  para: string;
  skills: { img: string; name: string }[];
  img: string;
  github: string;
  website: string;
};

export type AboutImgT = {
  myPicture: string;
};

export type ModalT = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  content?: string;
};

export type skillT = {
  skill: string;
  skillImg: string;
};
