import 'module-alias/register';
import { ExpressApplication } from './infrastructure/express-application';

new ExpressApplication().bootstrap();

