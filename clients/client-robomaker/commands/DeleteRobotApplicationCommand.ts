import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeleteRobotApplicationRequest, DeleteRobotApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRobotApplicationCommand,
  serializeAws_restJson1DeleteRobotApplicationCommand,
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

export interface DeleteRobotApplicationCommandInput extends DeleteRobotApplicationRequest {}
export interface DeleteRobotApplicationCommandOutput extends DeleteRobotApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes a robot application.</p>
 */
export class DeleteRobotApplicationCommand extends $Command<
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRobotApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRobotApplicationCommandInput, DeleteRobotApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DeleteRobotApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRobotApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRobotApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRobotApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRobotApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRobotApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteRobotApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
