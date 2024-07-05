import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";

export interface PostToken {
  item: {
    token: string; // jwt 토큰 decode하면 payload에 userId 활용 가능 (참고)
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name: string; // optional
        phone: string; // optional
        address: string; // optional
        bio: string; // optional
      };
      href: string;
    };
  };
  links: [];
}

export interface GetNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string[];
  keyword: string;
  items: {
    item: {
      id: string;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: boolean;
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
    };
    links: {
      rel: string;
      description: string;
      method: string;
      href: string;
    }[];
  }[];
  links: [
    {
      rel: "self";
      description: "현재 페이지";
      method: "GET";
      href: string;
    },
    {
      rel: "prev";
      description: "이전 페이지";
      method: "GET";
      href: string;
    },
    {
      rel: "next";
      description: "다음 페이지";
      method: "GET";
      href: string;
    },
  ];
}

export interface GetShopsShopIdNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: boolean;
    };
    links: Array<object>;
  }[];
  links: Array<object>;
}

export interface PostShopsShopIdNotices {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface GetShopsShopIdNoticesNoticeId {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
    currentUserApplication: {
      item: {
        id: string; // application.id,
        status: "pending" | "accepted" | "rejected" | "canceled"; // application.status
        createdAt: string; // application.createdAt
      };
    };
  };
  links: Array<object>;
}

export interface PutShopsShopIdNoticesNoticeId {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface PostUsers {
  item: {
    id: string;
    email: string;
    type: "employee" | "employer";
  };
  links: Array<object>;
}

export interface GetUsersUserId {
  item: {
    id: string;
    email: string;
    type: "employee" | "employer";
    name: string;
    phone: string;
    address: string;
    bio: string;
    shop?: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
    };
  };
  links: [];
}

export type PostShop = {
  item: {
    id: string;
    name: string;
    category: CategoryType;
    address1: AddressType;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name: string;
        phone: string;
        address: string;
        bio: string;
      };
      href: string;
    };
  };
  links: Array<object>;
};

export interface GetShopsShopId {
  item: {
    id: string;
    name: string;
    category: CategoryType;
    address1: AddressType;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name: string;
        phone: string;
        address: string;
        bio: string;
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface PutShopsShopId {
  item: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name: string; // optional
        phone: string; // optional
        address: string; // optional
        bio: string; // optional
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface GetShopsShopIdNoticesNoticeIdApplications {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      status: "pending" | "accepted" | "rejected" | "canceled";
      createdAt: string;
      user: {
        item: {
          id: string;
          email: string;
          type: "employee" | "employer";
          name: string;
          phone: string;
          address: string;
          bio: string;
        };
        href: string;
      };
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          startsAt: string;
          workhour: number;
          description: string;
          closed: boolean;
        };
        href: string;
      };
    };
    links: Array<object>;
  }[];
  links: Array<object>;
}

export interface PostShopsShopIdNoticesNoticeIdApplications {
  item: {
    id: string;
    status: "pending" | "accepted" | "rejected" | "canceled";
    createdAt: string;
    user: {
      item: {
        id: string;
        email: string;
        type: "employee" | "employer";
        name: string;
        phone: string;
        address: string;
        bio: string;
      };
      href: string;
    };
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
    notice: {
      item: {
        id: string;
        hourlyPay: number;
        startsAt: string;
        workhour: number;
        description: string;
        closed: boolean;
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface PutShopsShopIdNoticesNoticeIdApplicationsApplicationId {
  item: {
    id: string;
    status: "pending" | "accepted" | "rejected" | "canceled";
    createdAt: string;
    user: {
      item: {
        id: string;
        email: string;
        type: "employee" | "employer";
        name: string;
        phone: string;
        address: string;
        bio: string;
      };
      href: string;
    };
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
    notice: {
      item: {
        id: string;
        hourlyPay: number;
        startsAt: string;
        workhour: number;
        description: string;
        closed: boolean;
      };
      href: string;
    };
  };
  links: Array<object>;
}

export interface GetUsersUserIdApplications {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      status: "pending" | "accepted" | "rejected" | "canceled";
      createdAt: string;
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          startsAt: string;
          workhour: number;
          description: string;
          closed: boolean;
        };
      };
    };
    links: Array<object>;
  }[];
  links: Array<object>;
}

export interface getUsersUserIdAlerts {
  offset: number;
  limit: number;
  count: number; // 전체 개수
  hasNext: boolean; // 다음 내용 존재 여부
  items: {
    item: {
      id: string;
      createdAt: string;
      result: "accepted" | "rejected";
      read: boolean;
      application: {
        item: {
          id: string;
          status: "pending" | "accepted" | "rejected";
        };
        href: string;
      };
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          description: string;
          startsAt: string;
          workhour: number;
          closed: boolean;
        };
        href: string;
      };
      links: Array<object>;
    };
  }[];
  links: Array<object>;
}

export interface PutUsersUserIdAlertsAlertId {
  offset: number;
  limit: number;
  items: {
    item: {
      id: string;
      createdAt: string;
      result: "accepted" | "rejected";
      read: boolean;
      application: {
        item: {
          id: string;
          status: "pending" | "accepted" | "rejected";
        };
        href: string;
      };
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          description: string;
          startsAt: string;
          workhour: number;
          closed: boolean;
        };
        href: string;
      };
      links: Array<object>;
    };
  }[];
  links: Array<object>;
}

export type UserProfileData = {
  item: {
    id: string;
    email: string;
    type: string;
    name: string;
    phone: string;
    address: AddressType;
    bio: string;
    shop: any | null;
  };
};

export type UserApplication = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      status: "pending" | "accepted" | "rejected" | "canceled";
      createdAt: string;
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          description: string;
          startsAt: string;
          workhour: number;
          closed: boolean;
        };
        href: string;
      };
    };
    links: {
      rel: string;
      description: string;
      method: string;
      href: string;
    }[];
  }[];
  links: {
    rel: string;
    description: string;
    method: string;
    href: string;
  }[];
};

export type PutUsersUserId = {
  item: {
    id: "string";
    email: "string";
    type: "employer | employee";
    name?: "string";
    phone?: "string";
    address?: "string";
    bio?: "string";
    shop: {
      item: {
        id: "string";
        name: "string";
        category: "string";
        address1: "string";
        address2: "string";
        description: "string";
        imageUrl: "string";
        originalHourlyPay: "number";
      };
    } | null;
  };
  links: [];
};
