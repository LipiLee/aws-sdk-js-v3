import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageTotalsRequest, GetUsageTotalsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetUsageTotalsCommand,
  serializeAws_restJson1GetUsageTotalsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetUsageTotalsCommandInput extends GetUsageTotalsRequest {}
export interface GetUsageTotalsCommandOutput extends GetUsageTotalsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 */
export class GetUsageTotalsCommand extends $Command<
  GetUsageTotalsCommandInput,
  GetUsageTotalsCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUsageTotalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetUsageTotalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsageTotalsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUsageTotalsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsageTotalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUsageTotalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageTotalsCommandOutput> {
    return deserializeAws_restJson1GetUsageTotalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
