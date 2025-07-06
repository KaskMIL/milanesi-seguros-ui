import { useMutation } from "@tanstack/react-query";

export interface ContactBody {
  name: string;
  email: string;
  message: string;
  category: string;
  phoneNumber: string;

}
const postContact = async (body: ContactBody): Promise<void> => {
  const request = new Request('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error("Ocurrio un error enviando la consulta, intente nuevamente más tarde");
  };
};

export const usePostContact = () => {
  return useMutation({
    mutationFn: (body: ContactBody) => postContact(body),
  })
}