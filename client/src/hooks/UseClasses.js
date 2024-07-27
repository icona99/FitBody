import classesAPI from "../api/classesAPI";

export function useCreateClass() {
    const classCreateHandler = (classData) => classesAPI.create(classData)

    return classCreateHandler
}