import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDomainStatisticsReportCommand,
  serializeAws_restJson1GetDomainStatisticsReportCommand,
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

export interface GetDomainStatisticsReportCommandInput extends GetDomainStatisticsReportRequest {}
export interface GetDomainStatisticsReportCommandOutput extends GetDomainStatisticsReportResponse, __MetadataBearer {}

/**
 * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
 *             email.</p>
 */
export class GetDomainStatisticsReportCommand extends $Command<
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainStatisticsReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainStatisticsReportCommandInput, GetDomainStatisticsReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDomainStatisticsReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainStatisticsReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainStatisticsReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainStatisticsReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDomainStatisticsReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDomainStatisticsReportCommandOutput> {
    return deserializeAws_restJson1GetDomainStatisticsReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
