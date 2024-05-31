export class Env {
    public static readonly URL = process.env.BASE_URL;
    public static readonly USERNAME = process.env.ADMIN_TEST_EMAIL;
    public static readonly PASSWORD = process.env.ADMIN_TEST_PASSWORD;
    public static readonly DB_PORT = process.env.DB_PORT;
    public static readonly DB_SHOP_USER = process.env.DB_SHOP_USER;
    public static readonly DB_SHOP_PASSWORD = process.env.DB_SHOP_PASSWORD;
    public static readonly DB_SHOP_HOST = process.env.DB_SHOP_HOST;
    public static readonly DB_SHOP_DATABASE = process.env.DB_SHOP_DATABASE;
    public static readonly API_TOKEN = process.env.API_TOKEN;
  }