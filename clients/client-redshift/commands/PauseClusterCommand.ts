import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PauseClusterMessage } from "../models/models_0";
import { PauseClusterResult } from "../models/models_1";
import { deserializeAws_queryPauseClusterCommand, serializeAws_queryPauseClusterCommand } from "../protocols/Aws_query";
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

export interface PauseClusterCommandInput extends PauseClusterMessage {}
export interface PauseClusterCommandOutput extends PauseClusterResult, __MetadataBearer {}

/**
 * <p>Pauses a cluster.</p>
 */
export class PauseClusterCommand extends $Command<
  PauseClusterCommandInput,
  PauseClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PauseClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PauseClusterCommandInput, PauseClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "PauseClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PauseClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PauseClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PauseClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPauseClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PauseClusterCommandOutput> {
    return deserializeAws_queryPauseClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
