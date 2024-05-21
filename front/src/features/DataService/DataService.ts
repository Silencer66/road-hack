import axios, { AxiosResponse, AxiosError } from "axios";

export default class DataService {
    // Метод для выполнения GET запроса
    static async get<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.get<T>(`${url}`);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // Обработка ошибок
    private static handleError(error: AxiosError) {
        if (error.response) {
            console.error("Ошибка:", error.response.status);
        } else if (error.request) {
            console.error("Не удалось отправить запрос:", error.request);
        } else {
            console.error("Ошибка:", error.message);
        }
    }
}
