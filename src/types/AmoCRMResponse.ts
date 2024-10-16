import type { Company } from "./Company";
import type { Contact } from "./Contact";
import type { Lead } from "./leads";

export interface AmoCRMResponse {
    _page: number;
    _links: {
        self: {
            href: string;
        };
        next?: {
            href: string;
        };
    };
    _embedded: {
        leads?: Lead[];
        contacts?: Contact[];
        companies?: Company[];
    };
}
