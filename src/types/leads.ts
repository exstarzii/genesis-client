export interface Lead {
    id: number;
    name: string;
    price: number;
    responsible_user_id: number;
    group_id: number;
    status_id: number;
    pipeline_id: number;
    loss_reason_id: number | null;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    closed_at: number | null;
    closest_task_at: number | null;
    is_deleted: boolean;
    custom_fields_values: any | null;
    score: number | null;
    account_id: number;
    labor_cost: number | null;
    _links: {
        self: {
            href: string;
        };
    };
    _embedded: {
        tags: any[];
        companies: any[];
    };
}
