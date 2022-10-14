import { useEffect, useState } from "react";

import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaTeacher, setListaTeacher] = useState<Teacher[]>([])

    useEffect(()=> {
        ApiService.get('/teachers').then((response) => {
            setListaTeacher(response.data)
        })
    }, []);

    console.log(listaTeacher)

    return {
        listaTeacher
    }
}