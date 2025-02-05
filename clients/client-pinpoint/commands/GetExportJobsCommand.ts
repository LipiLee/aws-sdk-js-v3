import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetExportJobsRequest, GetExportJobsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetExportJobsCommand,
  serializeAws_restJson1GetExportJobsCommand,
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

export interface GetExportJobsCommandInput extends GetExportJobsRequest {}
export interface GetExportJobsCommandOutput extends GetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of all the export jobs for an application.</p>
 */
export class GetExportJobsCommand extends $Command<
  GetExportJobsCommandInput,
  GetExportJobsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExportJobsCommandInput, GetExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExportJobsCommandOutput> {
    return deserializeAws_restJson1GetExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
